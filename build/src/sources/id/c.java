package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f28329a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f28330b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f28329a = byteArrayOutputStream;
        this.f28330b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f28329a.reset();
        try {
            b(this.f28330b, aVar.f28323d);
            String str = aVar.f28324e;
            if (str == null) {
                str = "";
            }
            b(this.f28330b, str);
            this.f28330b.writeLong(aVar.f28325i);
            this.f28330b.writeLong(aVar.f28326o);
            this.f28330b.write(aVar.f28327p);
            this.f28330b.flush();
            return this.f28329a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
