package du;

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
    private final bu.p f22104d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f22105e;

    /* renamed from: i  reason: collision with root package name */
    private final int f22106i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f22107o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f22108p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(bu.p pVar, Map map) {
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
        this.f22104d = pVar;
        this.f22105e = Collections.unmodifiableMap(hashMap);
        this.f22106i = 0;
        this.f22107o = true;
        this.f22108p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f22105e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(bu.o oVar, Appendable appendable) {
        String c10 = c(oVar.k(this.f22104d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // du.h
    public h a(c cVar, bu.d dVar, int i10) {
        return new o(this.f22104d, this.f22105e, ((Integer) dVar.b(cu.a.f21127s, 0)).intValue(), ((Boolean) dVar.b(cu.a.f21117i, Boolean.TRUE)).booleanValue(), (Locale) dVar.b(cu.a.f21111c, Locale.getDefault()));
    }

    @Override // du.h
    public void d(CharSequence charSequence, s sVar, bu.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f22106i;
        } else {
            intValue = ((Integer) dVar.b(cu.a.f21127s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f22104d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f22107o;
        } else {
            booleanValue = ((Boolean) dVar.b(cu.a.f21117i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f22108p;
        } else {
            locale = (Locale) dVar.b(cu.a.f21111c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f22105e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f22104d, obj);
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
                        tVar.I(this.f22104d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f22104d.name());
    }

    @Override // du.h
    public h e(bu.p pVar) {
        if (this.f22104d == pVar) {
            return this;
        }
        return new o(pVar, this.f22105e);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f22104d.equals(oVar.f22104d) && this.f22105e.equals(oVar.f22105e)) {
                return true;
            }
        }
        return false;
    }

    @Override // du.h
    public boolean f() {
        return false;
    }

    @Override // du.h
    public int g(bu.o oVar, Appendable appendable, bu.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f22104d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // du.h
    public bu.p getElement() {
        return this.f22104d;
    }

    public int hashCode() {
        return (this.f22104d.hashCode() * 7) + (this.f22105e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f22104d.name());
        sb2.append(", resources=");
        sb2.append(this.f22105e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(bu.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f22104d = pVar;
        this.f22105e = map;
        this.f22106i = i10;
        this.f22107o = z10;
        this.f22108p = locale;
    }
}
