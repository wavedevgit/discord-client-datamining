package jd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f30908a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f30909b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f30908a = byteArrayOutputStream;
        this.f30909b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f30908a.reset();
        try {
            b(this.f30909b, aVar.f30902d);
            String str = aVar.f30903e;
            if (str == null) {
                str = "";
            }
            b(this.f30909b, str);
            this.f30909b.writeLong(aVar.f30904i);
            this.f30909b.writeLong(aVar.f30905o);
            this.f30909b.write(aVar.f30906p);
            this.f30909b.flush();
            return this.f30908a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
