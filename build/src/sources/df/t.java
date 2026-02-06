package df;

import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.util.Log;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t {

    /* renamed from: a  reason: collision with root package name */
    private final Messenger f20742a;

    /* renamed from: b  reason: collision with root package name */
    private final h f20743b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public t(IBinder iBinder) {
        String interfaceDescriptor = iBinder.getInterfaceDescriptor();
        if (Objects.equals(interfaceDescriptor, "android.os.IMessenger")) {
            this.f20742a = new Messenger(iBinder);
            this.f20743b = null;
        } else if (Objects.equals(interfaceDescriptor, "com.google.android.gms.iid.IMessengerCompat")) {
            this.f20743b = new h(iBinder);
            this.f20742a = null;
        } else {
            Log.w("MessengerIpcClient", "Invalid interface descriptor: ".concat(String.valueOf(interfaceDescriptor)));
            throw new RemoteException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a(Message message) {
        Messenger messenger = this.f20742a;
        if (messenger != null) {
            messenger.send(message);
            return;
        }
        h hVar = this.f20743b;
        if (hVar != null) {
            hVar.b(message);
            return;
        }
        throw new IllegalStateException("Both messengers are null");
    }
}
