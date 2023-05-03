import itemData from '../data/ItemData'

const ProductInfo = ({rowIDX, colIDX, backgroundDim}) => 
{
    console.log(backgroundDim)
    return (
    <div className={`${backgroundDim} w-full h-[2600px] flex-auto leading-[70px]`} >
        <div className="text-white relative top-24 left-[0px] width w-[full] text-left">
            <h1>{itemData[rowIDX][colIDX].title}</h1>
            <div className='h-[24px]'></div>
            <pre>
                <p className='text-[28px]'>{itemData[rowIDX][colIDX].description}</p>
            </pre>
            <h1>{itemData[rowIDX][colIDX].titleJP}</h1>
            <div className='h-[24px]'></div>
            <pre>
                <p className='text-[28px]'>{itemData[rowIDX][colIDX].descriptionJP}</p>
            </pre>

            <h1>Extra Info:</h1>
            <pre>
                <p className='text-[28px]'>{itemData[rowIDX][colIDX].extraInfo}</p>
            </pre>

            <h1>Artists from the demo songs:</h1>
            <pre>
                <p className='text-[28px]'>{itemData[rowIDX][colIDX].artistCredits}</p>
            </pre>

            <h1>Illustration:</h1>
            <pre>
                <p className='text-[28px]'>{itemData[rowIDX][colIDX].illustrationCredits}</p>
            </pre>

            <h1>Translation:</h1>
            <pre>
                <p className='text-[28px]'>{itemData[rowIDX][colIDX].translationCredits}</p>
            </pre>

        </div>
    </div>
    );
};
  
export default ProductInfo;