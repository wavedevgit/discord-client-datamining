package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f28106a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f28107b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f28106a = byteArrayOutputStream;
        this.f28107b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f28106a.reset();
        try {
            b(this.f28107b, aVar.f28100d);
            String str = aVar.f28101e;
            if (str == null) {
                str = "";
            }
            b(this.f28107b, str);
            this.f28107b.writeLong(aVar.f28102i);
            this.f28107b.writeLong(aVar.f28103o);
            this.f28107b.write(aVar.f28104p);
            this.f28107b.flush();
            return this.f28106a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
