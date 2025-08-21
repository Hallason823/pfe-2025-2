function ShowProfileImage() {
    const image_parameters = {path: "/images/profile_image.png", heigth: 220, width: 200, alt_message: "IMAGE: Hallason Matias da Silva"}
    return (
        <div>
            <img 
                src={image_parameters.path}
                height={image_parameters.heigth}
                width={image_parameters.width}
                alt={image_parameters.alt_message}
            />
            <h2>Hallason Matias da Silva</h2>
        </div>
    );
}

function Description() {
    return (
            <div>
                <p>Hi, my name is Hallason Matias da Silva, and I&apos;m a Full Stack Developer and AI Engineer currently working at Leadfy Imob.</p>
                <p>I&apos;ve been building and maintaining scalable APIs and microservices in Ruby and Python, integrating with CRMs and third-party systems. I also design data pipelines and deploy NLP models using Transformers and FastText for classification and entity extraction tasks.</p>
                <p>On the infrastructure side, I manage cloud environments using Docker and Kubernetes, with full observability stacks including Prometheus, Grafana, and ELK. I also automate tasks with Bash in Linux-based systems.</p>
                <p>My background combines software engineering with AI and robotics. At CEERMA-UFPE, I led R&D projects for predictive maintenance, focusing on Remaining Useful Life prediction using time series and deep learning models like autoencoders and Siamese networks.</p>
                <p>At CIn/Motorola, I worked on Android test automation and robotic arm control, developing custom tools that improved device testing accuracy and speed.</p> 
                <p>I hold a degree in Mechanical Engineering from UFPE, with a semester abroad in France, and I&apos;m also pursuing a degree in Internet Systems. This multidisciplinary training gives me a strong foundation in both software and systems thinking.</p>
            </div>
    );
}

export function Profile() {
    return (
        <div>
            <ShowProfileImage />
            <hr />
            <Description />
        </div>
    );
}