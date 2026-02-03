package zg;

import android.util.Property;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends Property {

    /* renamed from: a  reason: collision with root package name */
    public static final Property f55950a = new d("childrenAlpha");

    private d(String str) {
        super(Float.class, str);
    }

    @Override // android.util.Property
    /* renamed from: a */
    public Float get(ViewGroup viewGroup) {
        Float f10 = (Float) viewGroup.getTag(yg.f.F);
        if (f10 != null) {
            return f10;
        }
        return Float.valueOf(1.0f);
    }

    @Override // android.util.Property
    /* renamed from: b */
    public void set(ViewGroup viewGroup, Float f10) {
        float floatValue = f10.floatValue();
        viewGroup.setTag(yg.f.F, f10);
        int childCount = viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            viewGroup.getChildAt(i10).setAlpha(floatValue);
        }
    }
}
