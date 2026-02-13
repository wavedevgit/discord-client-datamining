package og;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f40277a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40278b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f40279c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(Map map, Map map2, bj.d dVar) {
        this.f40277a = map;
        this.f40278b = map2;
        this.f40279c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new r2(byteArrayOutputStream, this.f40277a, this.f40278b, this.f40279c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
