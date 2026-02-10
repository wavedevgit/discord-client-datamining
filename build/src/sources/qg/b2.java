package qg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f45491a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45492b;

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f45493c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, zi.d dVar) {
        this.f45491a = map;
        this.f45492b = map2;
        this.f45493c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f45491a, this.f45492b, this.f45493c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
