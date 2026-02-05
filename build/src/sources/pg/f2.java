package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f45203a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45204b;

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f45205c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, xi.d dVar) {
        this.f45203a = map;
        this.f45204b = map2;
        this.f45205c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f45203a, this.f45204b, this.f45205c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
