package jd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f30909a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f30910b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f30909a = byteArrayOutputStream;
        this.f30910b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f30909a.reset();
        try {
            b(this.f30910b, aVar.f30903d);
            String str = aVar.f30904e;
            if (str == null) {
                str = "";
            }
            b(this.f30910b, str);
            this.f30910b.writeLong(aVar.f30905i);
            this.f30910b.writeLong(aVar.f30906o);
            this.f30910b.write(aVar.f30907p);
            this.f30910b.flush();
            return this.f30909a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
