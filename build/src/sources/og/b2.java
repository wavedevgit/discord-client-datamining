package og;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42681a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42682b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f42683c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, ui.d dVar) {
        this.f42681a = map;
        this.f42682b = map2;
        this.f42683c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f42681a, this.f42682b, this.f42683c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
