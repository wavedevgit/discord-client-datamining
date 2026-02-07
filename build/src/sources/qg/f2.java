package qg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f47081a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f47082b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f47083c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, yi.d dVar) {
        this.f47081a = map;
        this.f47082b = map2;
        this.f47083c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f47081a, this.f47082b, this.f47083c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
