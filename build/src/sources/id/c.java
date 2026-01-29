package id;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final ByteArrayOutputStream f28443a;

    /* renamed from: b  reason: collision with root package name */
    private final DataOutputStream f28444b;

    public c() {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        this.f28443a = byteArrayOutputStream;
        this.f28444b = new DataOutputStream(byteArrayOutputStream);
    }

    private static void b(DataOutputStream dataOutputStream, String str) {
        dataOutputStream.writeBytes(str);
        dataOutputStream.writeByte(0);
    }

    public byte[] a(a aVar) {
        this.f28443a.reset();
        try {
            b(this.f28444b, aVar.f28437d);
            String str = aVar.f28438e;
            if (str == null) {
                str = "";
            }
            b(this.f28444b, str);
            this.f28444b.writeLong(aVar.f28439i);
            this.f28444b.writeLong(aVar.f28440o);
            this.f28444b.write(aVar.f28441p);
            this.f28444b.flush();
            return this.f28443a.toByteArray();
        } catch (IOException e10) {
            throw new RuntimeException(e10);
        }
    }
}
