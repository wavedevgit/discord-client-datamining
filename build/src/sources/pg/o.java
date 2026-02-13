package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42855a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42856b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f42857c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, bj.d dVar) {
        this.f42855a = map;
        this.f42856b = map2;
        this.f42857c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f42855a, this.f42856b, this.f42857c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
