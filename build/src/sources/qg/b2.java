package qg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f44728a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f44729b;

    /* renamed from: c  reason: collision with root package name */
    private final bj.d f44730c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, bj.d dVar) {
        this.f44728a = map;
        this.f44729b = map2;
        this.f44730c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f44728a, this.f44729b, this.f44730c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
