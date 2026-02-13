package jd;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f31477a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f31478b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f31477a = byteArrayOutputStream;
        this.f31478b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f31477a.reset();
        try {
            b(this.f31478b, aVar.f31471d);
            String str = aVar.f31472e;
            if (str == null) {
                str = "";
            }
            b(this.f31478b, str);
            this.f31478b.writeLong(aVar.f31473i);
            this.f31478b.writeLong(aVar.f31474o);
            this.f31478b.write(aVar.f31475p);
            this.f31478b.flush();
            return this.f31477a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
