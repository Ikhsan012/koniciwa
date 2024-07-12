const mooCountry = (value) => {
    let region = '';
    if (value === 'AF') {
        region = 'Afganistan';
    } else if (value === 'AX') {
        region = 'Kepulauan Aland';
    } else if (value === 'AL') {
        region = 'Albania';
    } else if (value === 'DZ') {
        region = 'Aljazair';
    } else if (value === 'AS') {
        region = 'Samoa Amerika';
    } else if (value === 'AD') {
        region = 'Andorra';
    } else if (value === 'AO') {
        region = 'Angola';
    } else if (value === 'AI') {
        region = 'Anguilla';
    } else if (value === 'AQ') {
        region = 'Antartika';
    } else if (value === 'AG') {
        region = 'Antigua dan Barbuda';
    } else if (value === 'AR') {
        region = 'Argentina';
    } else if (value === 'AM') {
        region = 'Armenia';
    } else if (value === 'AW') {
        region = 'Aruba';
    } else if (value === 'AU') {
        region = 'Australia';
    } else if (value === 'AT') {
        region = 'Austria';
    } else if (value === 'AZ') {
        region = 'Azerbaijan';
    } else if (value === 'BS') {
        region = 'Bahama';
    } else if (value === 'BH') {
        region = 'Bahrain';
    } else if (value === 'BD') {
        region = 'Bangladesh';
    } else if (value === 'BB') {
        region = 'Barbados';
    } else if (value === 'BE') {
        region = 'Belgia';
    } else if (value === 'BZ') {
        region = 'Belize';
    } else if (value === 'BJ') {
        region = 'Benin';
    } else if (value === 'BM') {
        region = 'Bermuda';
    } else if (value === 'BT') {
        region = 'Bhutan';
    } else if (value === 'BO') {
        region = 'Bolivia, Negara Plurinasional';
    } else if (value === 'BQ') {
        region = 'Bonaire, Sint Eustatius dan Saba';
    } else if (value === 'BA') {
        region = 'Bosnia dan Herzegovina';
    } else if (value === 'BW') {
        region = 'Botswana';
    } else if (value === 'BV') {
        region = 'Bouvet Pulau';
    } else if (value === 'BR') {
        region = 'Brazil';
    } else if (value === 'IO') {
        region = 'Britania di Samudra Hindia';
    } else if (value === 'BN') {
        region = 'Brunei Darussalam';
    } else if (value === 'BG') {
        region = 'Bulgaria';
    } else if (value === 'BF') {
        region = 'Burkina Faso';
    } else if (value === 'BI') {
        region = 'Burundi';
    } else if (value === 'KH') {
        region = 'Kamboja';
    } else if (value === 'CM') {
        region = 'Kamerun';
    } else if (value === 'CA') {
        region = 'Kanada';
    } else if (value === 'CV') {
        region = 'Cape Verde';
    } else if (value === 'KY') {
        region = 'Kepulauan Cayman';
    } else if (value === 'CF') {
        region = 'Republik Afrika Tengah';
    } else if (value === 'TD') {
        region = 'Chad';
    } else if (value === 'CL') {
        region = 'Chili';
    } else if (value === 'CN') {
        region = 'Tiongkok';
    } else if (value === 'CX') {
        region = 'Christmas Island';
    } else if (value === 'CC') {
        region = 'Cocos (Keeling)';
    } else if (value === 'CO') {
        region = 'Kolombia';
    } else if (value === 'KM') {
        region = 'Komoro';
    } else if (value === 'CG') {
        region = 'Kongo';
    } else if (value === 'CD') {
        region = 'Kongo, Republik Demokratik';
    } else if (value === 'CK') {
        region = 'Kepulauan Cook';
    } else if (value === 'CR') {
        region = 'Kosta Rika';
    } else if (value === 'HR') {
        region = 'Kroasia';
    } else if (value === 'CW') {
        region = 'Curacao';
    } else if (value === 'CY') {
        region = 'Siprus';
    } else if (value === 'CZ') {
        region = 'Republik Ceko';
    } else if (value === 'DK') {
        region = 'Denmark';
    } else if (value === 'DJ') {
        region = 'Djibouti';
    } else if (value === 'DM') {
        region = 'Dominica';
    } else if (value === 'DO') {
        region = 'Republik Dominika';
    } else if (value === 'EC') {
        region = 'Ekuador';
    } else if (value === 'EG') {
        region = 'Mesir';
    } else if (value === 'SV') {
        region = 'El Salvador';
    } else if (value === 'GQ') {
        region = 'Guinea Ekuator';
    } else if (value === 'ER') {
        region = 'Eritrea';
    } else if (value === 'EE') {
        region = 'Estonia';
    } else if (value === 'ET') {
        region = 'Etiopia';
    } else if (value === 'FK') {
        region = 'Kepulauan Falkland (Malvinas)';
    } else if (value === 'FO') {
        region = 'Kepulauan Faroe';
    } else if (value === 'FJ') {
        region = 'Fiji';
    } else if (value === 'FI') {
        region = 'Finlandia';
    } else if (value === 'FR') {
        region = 'Prancis';
    } else if (value === 'GF') {
        region = 'Guyana Prancis';
    } else if (value === 'PF') {
        region = 'Polinesia Prancis';
    } else if (value === 'TF') {
        region = 'Wilayah Selatan Prancis';
    } else if (value === 'GA') {
        region = 'Gabon';
    } else if (value === 'GM') {
        region = 'Gambia';
    } else if (value === 'GE') {
        region = 'Georgia';
    } else if (value === 'DE') {
        region = 'Jerman';
    } else if (value === 'GH') {
        region = 'Ghana';
    } else if (value === 'GI') {
        region = 'Gibraltar';
    } else if (value === 'GR') {
        region = 'Yunani';
    } else if (value === 'GL') {
        region = 'Tanah Penggembalaan';
    } else if (value === 'GD') {
        region = 'Grenada';
    } else if (value === 'GP') {
        region = 'Guadeloupe';
    } else if (value === 'GU') {
        region = 'Guam';
    } else if (value === 'GT') {
        region = 'Guatemala';
    } else if (value === 'GG') {
        region = 'Guernsey';
    } else if (value === 'GN') {
        region = 'Guinea';
    } else if (value === 'GW') {
        region = 'Guinea-Bissau';
    } else if (value === 'GY') {
        region = 'Guyana';
    } else if (value === 'HT') {
        region = 'Haiti';
    } else if (value === 'HM') {
        region = 'Pulau Heard dan Kepulauan McDonald';
    } else if (value === 'VA') {
        region = 'Kota Vatikan';
    } else if (value === 'HN') {
        region = 'Honduras';
    } else if (value === 'HK') {
        region = 'Hong Kong';
    } else if (value === 'HU') {
        region = 'Hungaria';
    } else if (value === 'IS') {
        region = 'Islandia';
    } else if (value === 'IN') {
        region = 'India';
    } else if (value === 'ID') {
        region = 'Indonesia';
    } else if (value === 'IQ') {
        region = 'Irak';
    } else if (value === 'IE') {
        region = 'Irlandia';
    } else if (value === 'IM') {
        region = 'Pulau Manusia';
    } else if (value === 'IL') {
        region = 'Israel';
    } else if (value === 'IT') {
        region = 'Italia';
    } else if (value === 'JM') {
        region = 'Jamaika';
    } else if (value === 'JP') {
        region = 'Jepang';
    } else if (value === 'JE') {
        region = 'Jersey';
    } else if (value === 'JO') {
        region = 'Yordania';
    } else if (value === 'KZ') {
        region = 'Kazakhstan';
    } else if (value === 'KE') {
        region = 'Kenya';
    } else if (value === 'KI') {
        region = 'Kiribati';
    } else if (value === 'KR') {
        region = 'Republik Korea';
    } else if (value === 'KW') {
        region = 'Kuwait';
    } else if (value === 'KG') {
        region = 'Kirgistan';
    } else if (value === 'LA') {
        region = 'Republik Demokratik Rakyat Laos';
    } else if (value === 'LV') {
        region = 'Latvia';
    } else if (value === 'LB') {
        region = 'Lebanon';
    } else if (value === 'LS') {
        region = 'Lesotho';
    } else if (value === 'LR') {
        region = 'Liberia';
    } else if (value === 'LY') {
        region = 'Libya';
    } else if (value === 'LI') {
        region = 'Liechtenstein';
    } else if (value === 'LT') {
        region = 'Lithuania';
    } else if (value === 'LU') {
        region = 'Luksemburg';
    } else if (value === 'MO') {
        region = 'Macao';
    } else if (value === 'MG') {
        region = 'Madagaskar';
    } else if (value === 'MW') {
        region = 'Malawi';
    } else if (value === 'MY') {
        region = 'Malaysia';
    } else if (value === 'MV') {
        region = 'Maladewa';
    } else if (value === 'ML') {
        region = 'Mali';
    } else if (value === 'MT') {
        region = 'Malta';
    } else if (value === 'MH') {
        region = 'Kepulauan Marshall';
    } else if (value === 'MQ') {
        region = 'Martinique';
    } else if (value === 'MR') {
        region = 'Mauritania';
    } else if (value === 'MU') {
        region = 'Mauritius';
    } else if (value === 'YT') {
        region = 'Mayotte';
    } else if (value === 'MX') {
        region = 'Mexico';
    } else if (value === 'FM') {
        region = 'Mikronesia (Negara Federasi)';
    } else if (value === 'MD') {
        region = 'Moldova, Republik';
    } else if (value === 'MC') {
        region = 'Monaco';
    } else if (value === 'MN') {
        region = 'Mongolia';
    } else if (value === 'ME') {
        region = 'Montenegro';
    } else if (value === 'MS') {
        region = 'Montserrat';
    } else if (value === 'MA') {
        region = 'Maroko';
    } else if (value === 'MZ') {
        region = 'Mozambik';
    } else if (value === 'MM') {
        region = 'Myanmar';
    } else if (value === 'NA') {
        region = 'Namibia';
    } else if (value === 'NR') {
        region = 'Nauru';
    } else if (value === 'NP') {
        region = 'Nepal';
    } else if (value === 'NL') {
        region = 'Belanda';
    } else if (value === 'NC') {
        region = 'Kaledonia Baru';
    } else if (value === 'NZ') {
        region = 'Selandia Baru';
    } else if (value === 'NI') {
        region = 'Nikaragua';
    } else if (value === 'NE') {
        region = 'Niger';
    } else if (value === 'NG') {
        region = 'Nigeria';
    } else if (value === 'NU') {
        region = 'Niue';
    } else if (value === 'NF') {
        region = 'Pulau Norfolk';
    } else if (value === 'MK') {
        region = 'Makedonia Utara';
    } else if (value === 'MP') {
        region = 'Kepulauan Mariana Utara';
    } else if (value === 'OM') {
        region = 'Oman';
    } else if (value === 'PK') {
        region = 'Pakistan';
    } else if (value === 'PW') {
        region = 'Palau';
    } else if (value === 'PS') {
        region = 'Palestina';
    } else if (value === 'PA') {
        region = 'Panama';
    } else if (value === 'PG') {
        region = 'Papua Nugini';
    } else if (value === 'PY') {
        region = 'Paraguay';
    } else if (value === 'PE') {
        region = 'Peru';
    } else if (value === 'PH') {
        region = 'Filipina';
    } else if (value === 'PN') {
        region = 'Pitcairn';
    } else if (value === 'PL') {
        region = 'Polandia';
    } else if (value === 'PT') {
        region = 'Portugal';
    } else if (value === 'PR') {
        region = 'Puerto Rico';
    } else if (value === 'QA') {
        region = 'Qatar';
    } else if (value === 'RE') {
        region = 'Reuni';
    } else if (value === 'RO') {
        region = 'Rumania';
    } else if (value === 'RW') {
        region = 'Rwanda';
    } else if (value === 'BL') {
        region = 'Saint Barthelemy';
    } else if (value === 'SH') {
        region = 'Saint Helena, Ascension dan Tristan da Cunha';
    } else if (value === 'KN') {
        region = 'Saint Kitts dan Nevis';
    } else if (value === 'LC') {
        region = 'Saint Lucia';
    } else if (value === 'MF') {
        region = 'Saint Martin (bagian Perancis)';
    } else if (value === 'PM') {
        region = 'Saint Pierre dan Miquelon';
    } else if (value === 'VC') {
        region = 'Saint Vincent dan Grenadines';
    } else if (value === 'WS') {
        region = 'Samoa';
    } else if (value === 'SM') {
        region = 'San Marino';
    } else if (value === 'ST') {
        region = 'Sao Tome dan Principe';
    } else if (value === 'SA') {
        region = 'Arab Saudi';
    } else if (value === 'SN') {
        region = 'Senegal';
    } else if (value === 'RS') {
        region = 'Serbia';
    } else if (value === 'SC') {
        region = 'Seychelles';
    } else if (value === 'SL') {
        region = 'Sierra Leone';
    } else if (value === 'SG') {
        region = 'Singapura';
    } else if (value === 'SX') {
        region = 'Sint Maarten';
    } else if (value === 'SK') {
        region = 'Slovakia';
    } else if (value === 'SI') {
        region = 'Slovenia';
    } else if (value === 'SB') {
        region = 'Kepulauan Solomon';
    } else if (value === 'SO') {
        region = 'Somalia';
    } else if (value === 'ZA') {
        region = 'Afrika Selatan';
    } else if (value === 'GS') {
        region = 'Georgia Selatan dan Kepulauan Sandwich Selatan';
    } else if (value === 'SS') {
        region = 'Sudan Selatan';
    } else if (value === 'ES') {
        region = 'Spanyol';
    } else if (value === 'LK') {
        region = 'Sri Lanka';
    } else if (value === 'SR') {
        region = 'Suriname';
    } else if (value === 'SJ') {
        region = 'Svalbard dan Jan Mayen';
    } else if (value === 'SE') {
        region = 'Swedia';
    } else if (value === 'CH') {
        region = 'Swiss';
    } else if (value === 'TW') {
        region = 'Taiwan';
    } else if (value === 'TJ') {
        region = 'Tajikistan';
    } else if (value === 'TZ') {
        region = 'Tanzania, United Republic of';
    } else if (value === 'TH') {
        region = 'Thailand';
    } else if (value === 'TG') {
        region = 'Togo';
    } else if (value === 'TK') {
        region = 'Tokelau';
    } else if (value === 'TO') {
        region = 'Tonga';
    } else if (value === 'TT') {
        region = 'Trinidad dan Tobago';
    } else if (value === 'TN') {
        region = 'Tunisia';
    } else if (value === 'TR') {
        region = 'Turki';
    } else if (value === 'TM') {
        region = 'Turkmenistan';
    } else if (value === 'TC') {
        region = 'Kepulauan Turks dan Caicos';
    } else if (value === 'TV') {
        region = 'Tuvalu';
    } else if (value === 'UG') {
        region = 'Uganda';
    } else if (value === 'UA') {
        region = 'Ukraina';
    } else if (value === 'AE') {
        region = 'Uni Emirat Arab';
    } else if (value === 'GB') {
        region = 'Inggris Raya';
    } else if (value === 'US') {
        region = 'Amerika Serikat';
    } else if (value === 'UM') {
        region = 'Amerika Serikat Minor Outlying Islands';
    } else if (value === 'UY') {
        region = 'Uruguay';
    } else if (value === 'UZ') {
        region = 'Uzbekistan';
    } else if (value === 'VU') {
        region = 'Vanuatu';
    } else if (value === 'VE') {
        region = 'Venezuela';
    } else if (value === 'VN') {
        region = 'Vietnam';
    } else if (value === 'VG') {
        region = 'Kepulauan Virgin Britania Raya';
    } else if (value === 'VI') {
        region = 'Virgin Islands, US';
    } else if (value === 'WF') {
        region = 'Wallis dan Futuna';
    } else if (value === 'EH') {
        region = 'Sahara Barat';
    } else if (value === 'YE') {
        region = 'Yaman';
    } else if (value === 'ZM') {
        region = 'Zambia';
    } else if (value === 'ZW') {
        region = 'Zimbabwe';
    } else if (value === 'BY') {
        region = 'Belarus';
    } else if (value === 'CU') {
        region = 'Kuba';
    } else if (value === 'IR') {
        region = 'Iran, Republik Islam';
    } else if (value === 'KP') {
        region = 'Korea, Republik Rakyat Demokratik';
    } else if (value === 'RU') {
        region = 'Federasi Rusia';
    } else if (value === 'SD') {
        region = 'Sudan';
    } else if (value === 'SY') {
        region = 'Republik Arab Suriah';
    }
    return region;
}

module.exports = mooCountry