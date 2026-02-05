package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f27318a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f27319b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f27318a = byteArrayOutputStream;
        this.f27319b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f27318a.reset();
        try {
            b(this.f27319b, aVar.f27312d);
            String str = aVar.f27313e;
            if (str == null) {
                str = "";
            }
            b(this.f27319b, str);
            this.f27319b.writeLong(aVar.f27314i);
            this.f27319b.writeLong(aVar.f27315o);
            this.f27319b.write(aVar.f27316p);
            this.f27319b.flush();
            return this.f27318a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
