import { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="p-6 w-full">{children}</div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
