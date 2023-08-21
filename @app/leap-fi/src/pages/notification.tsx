import { ConnectButton } from '@rainbow-me/rainbowkit'
import { toast } from 'react-toastify'

export default function Home() {
  const testToat = (type: string) => {
    switch (type) {
      case 'success':
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        })
        break
      case 'error':
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        })
        break
      case 'warn':
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        })
        break
      case 'info':
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        })
        break
      case 'custom':
        toast("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        })
        break
      default:
        toast("Default Notification !")
        break;
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>
        <ConnectButton />
      </div>
      <div>
        <h1>Toast</h1>
        <ul>
          <li>
            <button className="rounded bg-white border-solid border-2 border-indigo-600" onClick={() => testToat('success')}>Success Notification</button>
          </li>
          <li>
            <button className="rounded bg-white border-solid border-2 border-indigo-600" onClick={() => testToat('error')}>Error Notification</button>
          </li>
          <li>
            <button className="rounded bg-white border-solid border-2 border-indigo-600" onClick={() => testToat('warn')}>Warning Notification</button>
          </li>
          <li>
            <button className="rounded bg-white border-solid border-2 border-indigo-600" onClick={() => testToat('info')}>Info Notification</button>
          </li>
          <li>
            <button className="rounded bg-white border-solid border-2 border-indigo-600" onClick={() => testToat('custom')}>Custom Notification</button>
          </li>
        </ul>
      </div>
    </main>
  )
}
