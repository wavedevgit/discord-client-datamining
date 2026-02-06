package qg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f47033a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f47034b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f47035c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, yi.d dVar) {
        this.f47033a = map;
        this.f47034b = map2;
        this.f47035c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f47033a, this.f47034b, this.f47035c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
