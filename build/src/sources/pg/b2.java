package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f43929a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f43930b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f43931c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, yi.d dVar) {
        this.f43929a = map;
        this.f43930b = map2;
        this.f43931c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f43929a, this.f43930b, this.f43931c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
