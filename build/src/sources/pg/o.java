package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42287a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42288b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f42289c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, bj.d dVar) {
        this.f42287a = map;
        this.f42288b = map2;
        this.f42289c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f42287a, this.f42288b, this.f42289c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
