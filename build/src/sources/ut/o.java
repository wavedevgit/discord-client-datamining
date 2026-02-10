package ut;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements h {

    /* renamed from: d  reason: collision with root package name */
    private final st.p f52001d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f52002e;

    /* renamed from: i  reason: collision with root package name */
    private final int f52003i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52004o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f52005p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(st.p pVar, Map map) {
        Map hashMap;
        Class type = pVar.getType();
        if (type.isEnum()) {
            if (map.size() >= type.getEnumConstants().length) {
                hashMap = b(type);
            } else {
                throw new IllegalArgumentException("Not enough text resources defined for enum: " + type.getName());
            }
        } else {
            hashMap = new HashMap(map.size());
        }
        hashMap.putAll(map);
        this.f52001d = pVar;
        this.f52002e = Collections.unmodifiableMap(hashMap);
        this.f52003i = 0;
        this.f52004o = true;
        this.f52005p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f52002e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(st.o oVar, Appendable appendable) {
        String c10 = c(oVar.t(this.f52001d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // ut.h
    public void a(CharSequence charSequence, s sVar, st.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f52003i;
        } else {
            intValue = ((Integer) dVar.b(tt.a.f51020s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f52001d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f52004o;
        } else {
            booleanValue = ((Boolean) dVar.b(tt.a.f51010i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f52005p;
        } else {
            locale = (Locale) dVar.b(tt.a.f51004c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f52002e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f52001d, obj);
                        sVar.l(i11);
                        return;
                    }
                } else {
                    continue;
                }
            } else {
                int length3 = c10.length();
                if (length3 <= i10) {
                    int i12 = length3 + f10;
                    if (c10.equals(charSequence.subSequence(f10, i12).toString())) {
                        tVar.I(this.f52001d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f52001d.name());
    }

    @Override // ut.h
    public h d(c cVar, st.d dVar, int i10) {
        return new o(this.f52001d, this.f52002e, ((Integer) dVar.b(tt.a.f51020s, 0)).intValue(), ((Boolean) dVar.b(tt.a.f51010i, Boolean.TRUE)).booleanValue(), (Locale) dVar.b(tt.a.f51004c, Locale.getDefault()));
    }

    @Override // ut.h
    public h e(st.p pVar) {
        if (this.f52001d == pVar) {
            return this;
        }
        return new o(pVar, this.f52002e);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f52001d.equals(oVar.f52001d) && this.f52002e.equals(oVar.f52002e)) {
                return true;
            }
        }
        return false;
    }

    @Override // ut.h
    public int f(st.o oVar, Appendable appendable, st.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f52001d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // ut.h
    public boolean g() {
        return false;
    }

    @Override // ut.h
    public st.p getElement() {
        return this.f52001d;
    }

    public int hashCode() {
        return (this.f52001d.hashCode() * 7) + (this.f52002e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f52001d.name());
        sb2.append(", resources=");
        sb2.append(this.f52002e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(st.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f52001d = pVar;
        this.f52002e = map;
        this.f52003i = i10;
        this.f52004o = z10;
        this.f52005p = locale;
    }
}
