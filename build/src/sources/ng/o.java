package ng;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f41490a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41491b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41492c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, ui.d dVar) {
        this.f41490a = map;
        this.f41491b = map2;
        this.f41492c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f41490a, this.f41491b, this.f41492c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
