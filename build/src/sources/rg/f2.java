package rg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f46653a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f46654b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f46655c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, bj.d dVar) {
        this.f46653a = map;
        this.f46654b = map2;
        this.f46655c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f46653a, this.f46654b, this.f46655c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
