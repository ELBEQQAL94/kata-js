/* The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

function rgb(red, green, bleu){
   let rgb = {
           red: {
               '0': '00',
               '1': '01',
               '2': '02',
               '3': '03',
               '4': '04',
               '5': '05',
               '6': '06',
               '7': '07',
               '8': '08',
               '9': '09',
               '10': '0A',
               '11': '0B',
               '12': '0C',
               '13': '0D',
               '14': '0E',
               '15': '0F',
               '16': '10',
               '17': '11',
               '18': '12',
               '19': '13',
               '20': '14',
               '21': '15',
               '22': '16',
               '23': '17',
               '24': '18',
               '25': '19',
               '26': '1A',
               '27': '1B',
               '28': '1C',
               '29': '1D',
               '30': '1E',
               '31': '1F',
               '32': '20',
               '33': '21',
               '34': '22',
               '35': '23',
               '36': '24',
               '37': '25',
               '38': '26',
               '39': '27',
               '40': '28',
               '41': '29',
               '42': '2A',
               '43': '2B',
               '44': '2C',
               '45': '2D',
               '46': '2E',
               '47': '2F',
               '48': '30', 
               '255':'FF'
           },
           green: {
            '255':'FF'
           },
           bleu: {
            '255':'FF'
           }
       }

       return rgb.red[red.toString()] +rgb.green[green.toString()] + rgb.bleu[bleu.toString()] ;
}

console.log(rgb(255,255,255));