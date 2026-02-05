package ng;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f40868a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40869b;

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f40870c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, xi.d dVar) {
        this.f40868a = map;
        this.f40869b = map2;
        this.f40870c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f40868a, this.f40869b, this.f40870c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
