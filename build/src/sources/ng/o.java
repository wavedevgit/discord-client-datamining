package ng;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f41408a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41409b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41410c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, ui.d dVar) {
        this.f41408a = map;
        this.f41409b = map2;
        this.f41410c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f41408a, this.f41409b, this.f41410c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
