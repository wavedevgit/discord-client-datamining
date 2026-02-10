package ta;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements e {

    /* renamed from: i  reason: collision with root package name */
    private static final Set f48639i = new HashSet(Arrays.asList("encoded_size", "encoded_width", "encoded_height", "uri_source", "image_format", "bitmap_config", "is_rounded", "non_fatal_decode_error", "original_url", "modified_url", "image_color_space"));

    /* renamed from: d  reason: collision with root package name */
    private Map f48640d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private ImageInfo f48641e;

    @Override // ta.e
    public ImageInfo E() {
        if (this.f48641e == null) {
            this.f48641e = new m(getWidth(), getHeight(), w(), J1(), getExtras());
        }
        return this.f48641e;
    }

    @Override // z9.a
    public void J(Map map) {
        if (map != null) {
            for (String str : f48639i) {
                Object obj = map.get(str);
                if (obj != null) {
                    this.f48640d.put(str, obj);
                }
            }
        }
    }

    @Override // ta.e
    public o J1() {
        return n.f48671d;
    }

    @Override // ta.l, z9.a
    public Map getExtras() {
        return this.f48640d;
    }

    @Override // z9.a
    public void p(String str, Object obj) {
        if (f48639i.contains(str)) {
            this.f48640d.put(str, obj);
        }
    }

    @Override // ta.e
    public boolean q2() {
        return false;
    }
}
