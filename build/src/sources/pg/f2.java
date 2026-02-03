package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f45315a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45316b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f45317c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, ui.d dVar) {
        this.f45315a = map;
        this.f45316b = map2;
        this.f45317c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f45315a, this.f45316b, this.f45317c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
