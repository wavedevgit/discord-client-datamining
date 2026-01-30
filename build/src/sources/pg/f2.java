package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f45241a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45242b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f45243c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, ui.d dVar) {
        this.f45241a = map;
        this.f45242b = map2;
        this.f45243c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f45241a, this.f45242b, this.f45243c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
