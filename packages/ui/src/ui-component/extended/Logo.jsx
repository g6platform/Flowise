import logo from '@/assets/images/g6platform_horizontal_in_white_or_transparent.png'
import logoDark from '@/assets/images/g6platform_horizontal_in_black.png'

// cleanup
// import logo from '@/assets/images/flowise_logo.png'
// import logoDark from '@/assets/images/flowise_logo_dark.png'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 150 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='G6 ATC'
            />
        </div>
    )
}

export default Logo
