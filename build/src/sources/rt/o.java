package rt;

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
    private final pt.p f49185d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f49186e;

    /* renamed from: i  reason: collision with root package name */
    private final int f49187i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f49188o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f49189p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(pt.p pVar, Map map) {
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
        this.f49185d = pVar;
        this.f49186e = Collections.unmodifiableMap(hashMap);
        this.f49187i = 0;
        this.f49188o = true;
        this.f49189p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f49186e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(pt.o oVar, Appendable appendable) {
        String c10 = c(oVar.v(this.f49185d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // rt.h
    public h a(pt.p pVar) {
        if (this.f49185d == pVar) {
            return this;
        }
        return new o(pVar, this.f49186e);
    }

    @Override // rt.h
    public void d(CharSequence charSequence, s sVar, pt.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f49187i;
        } else {
            intValue = ((Integer) dVar.a(qt.a.f48104s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f49185d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f49188o;
        } else {
            booleanValue = ((Boolean) dVar.a(qt.a.f48094i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f49189p;
        } else {
            locale = (Locale) dVar.a(qt.a.f48088c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f49186e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f49185d, obj);
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
                        tVar.I(this.f49185d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f49185d.name());
    }

    @Override // rt.h
    public h e(c cVar, pt.d dVar, int i10) {
        return new o(this.f49185d, this.f49186e, ((Integer) dVar.a(qt.a.f48104s, 0)).intValue(), ((Boolean) dVar.a(qt.a.f48094i, Boolean.TRUE)).booleanValue(), (Locale) dVar.a(qt.a.f48088c, Locale.getDefault()));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f49185d.equals(oVar.f49185d) && this.f49186e.equals(oVar.f49186e)) {
                return true;
            }
        }
        return false;
    }

    @Override // rt.h
    public int f(pt.o oVar, Appendable appendable, pt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f49185d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // rt.h
    public boolean g() {
        return false;
    }

    @Override // rt.h
    public pt.p getElement() {
        return this.f49185d;
    }

    public int hashCode() {
        return (this.f49185d.hashCode() * 7) + (this.f49186e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f49185d.name());
        sb2.append(", resources=");
        sb2.append(this.f49186e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(pt.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f49185d = pVar;
        this.f49186e = map;
        this.f49187i = i10;
        this.f49188o = z10;
        this.f49189p = locale;
    }
}
