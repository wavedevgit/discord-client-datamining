package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f28459a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f28460b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f28459a = byteArrayOutputStream;
        this.f28460b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f28459a.reset();
        try {
            b(this.f28460b, aVar.f28453d);
            String str = aVar.f28454e;
            if (str == null) {
                str = "";
            }
            b(this.f28460b, str);
            this.f28460b.writeLong(aVar.f28455i);
            this.f28460b.writeLong(aVar.f28456o);
            this.f28460b.write(aVar.f28457p);
            this.f28460b.flush();
            return this.f28459a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
