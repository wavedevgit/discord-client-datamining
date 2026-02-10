package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42286a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42287b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f42288c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, bj.d dVar) {
        this.f42286a = map;
        this.f42287b = map2;
        this.f42288c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f42286a, this.f42287b, this.f42288c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
