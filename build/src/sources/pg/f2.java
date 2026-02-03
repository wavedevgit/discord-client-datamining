package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f45273a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45274b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f45275c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, ui.d dVar) {
        this.f45273a = map;
        this.f45274b = map2;
        this.f45275c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f45273a, this.f45274b, this.f45275c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
