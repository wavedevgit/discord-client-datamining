package og;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42753a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42754b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f42755c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, ui.d dVar) {
        this.f42753a = map;
        this.f42754b = map2;
        this.f42755c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f42753a, this.f42754b, this.f42755c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
