package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f26655a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f26656b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f26655a = byteArrayOutputStream;
        this.f26656b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f26655a.reset();
        try {
            b(this.f26656b, aVar.f26649d);
            String str = aVar.f26650e;
            if (str == null) {
                str = "";
            }
            b(this.f26656b, str);
            this.f26656b.writeLong(aVar.f26651i);
            this.f26656b.writeLong(aVar.f26652o);
            this.f26656b.write(aVar.f26653p);
            this.f26656b.flush();
            return this.f26655a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
