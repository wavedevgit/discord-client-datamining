package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f26703a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f26704b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f26703a = byteArrayOutputStream;
        this.f26704b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f26703a.reset();
        try {
            b(this.f26704b, aVar.f26697d);
            String str = aVar.f26698e;
            if (str == null) {
                str = "";
            }
            b(this.f26704b, str);
            this.f26704b.writeLong(aVar.f26699i);
            this.f26704b.writeLong(aVar.f26700o);
            this.f26704b.write(aVar.f26701p);
            this.f26704b.flush();
            return this.f26703a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
