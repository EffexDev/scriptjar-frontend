import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

    const copyrightYear = new Date().getFullYear();

    return (
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center py-2 bg-blue-600">
            <p className="text-white">© {copyrightYear} Jordan Cartledge. All rights reserved.</p>
            <div className="flex flex-row text-white w-25 justify-evenly">
                <a href="https://x.com/EffexForge" target="_blank"><XIcon /></a>
                <a href="https://www.instagram.com/thesmoothdescent/?next=%2Feffexforge%2F" target="_blank"><InstagramIcon /></a>
                <a href="https://github.com/EffexDev" target="_blank" className="pl-1"><GitHubIcon /></a>
            </div>
        </div>
    );
}

export default Footer;
