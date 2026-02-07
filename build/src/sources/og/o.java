package og;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42368a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42369b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f42370c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, yi.d dVar) {
        this.f42368a = map;
        this.f42369b = map2;
        this.f42370c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f42368a, this.f42369b, this.f42370c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
