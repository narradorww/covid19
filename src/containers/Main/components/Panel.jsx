import React, {memo} from 'react';
import { 
    Card, 
    Typography,
    Button,
    Select,
    MenuItem
} from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import {CardPanelContentStyled, ItemStyled } from './style'
import RefreshIcon from '../../../assets/images/refresh.svg'

const navigatorHasShare = navigator.share;


function Panel ({updateAt, onChange, data, country,  getCovidData}){
    const {cases, recovered, deaths, todayCases, todayDeaths} = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`}/>
            </ItemStyled>
        </MenuItem>

    )

    const textCovid19 =`País: ${country} - recuperados ${recovered} - Total de mortos ${deaths} - Casos Hoje ${todayCases} - Total de Casos ${cases} - Mortos hoje ${todayDeaths}`

    const copyInfo =()=> {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo=()=>{
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://dadoscovid.vercel.app'
         })
    }

    const renderShareButton =(
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">
                        COVIDMONITOR
                    </Typography>
                    <Typography variant="h6" component="span" color="primary">
                        Painel Coronavirus
                    </Typography>
                    <Typography variant="body2" component="span" color="primary">
                        Atualizado em : {updateAt}
                    </Typography>
                        <div className="pt-2">
                            <Select onChange={onChange} value={country}>
                                {COUNTRIES.map(renderCountries)}
                            </Select>
                        </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default  memo(Panel)