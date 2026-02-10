package jd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f30108a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f30109b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f30108a = byteArrayOutputStream;
        this.f30109b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f30108a.reset();
        try {
            b(this.f30109b, aVar.f30102d);
            String str = aVar.f30103e;
            if (str == null) {
                str = "";
            }
            b(this.f30109b, str);
            this.f30109b.writeLong(aVar.f30104i);
            this.f30109b.writeLong(aVar.f30105o);
            this.f30109b.write(aVar.f30106p);
            this.f30109b.flush();
            return this.f30108a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
