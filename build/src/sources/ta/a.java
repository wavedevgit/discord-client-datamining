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
    private static final Set f50707i = new HashSet(Arrays.asList("encoded_size", "encoded_width", "encoded_height", "uri_source", "image_format", "bitmap_config", "is_rounded", "non_fatal_decode_error", "original_url", "modified_url", "image_color_space"));

    /* renamed from: d  reason: collision with root package name */
    private Map f50708d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private ImageInfo f50709e;

    @Override // ta.e
    public ImageInfo E() {
        if (this.f50709e == null) {
            this.f50709e = new m(getWidth(), getHeight(), w(), F1(), getExtras());
        }
        return this.f50709e;
    }

    @Override // ta.e
    public o F1() {
        return n.f50739d;
    }

    @Override // z9.a
    public void J(Map map) {
        if (map != null) {
            for (String str : f50707i) {
                Object obj = map.get(str);
                if (obj != null) {
                    this.f50708d.put(str, obj);
                }
            }
        }
    }

    @Override // ta.l, z9.a
    public Map getExtras() {
        return this.f50708d;
    }

    @Override // ta.e
    public boolean l2() {
        return false;
    }

    @Override // z9.a
    public void p(String str, Object obj) {
        if (f50707i.contains(str)) {
            this.f50708d.put(str, obj);
        }
    }
}
