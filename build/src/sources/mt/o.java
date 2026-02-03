package mt;

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
    private final kt.p f39381d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f39382e;

    /* renamed from: i  reason: collision with root package name */
    private final int f39383i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f39384o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f39385p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(kt.p pVar, Map map) {
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
        this.f39381d = pVar;
        this.f39382e = Collections.unmodifiableMap(hashMap);
        this.f39383i = 0;
        this.f39384o = true;
        this.f39385p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f39382e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(kt.o oVar, Appendable appendable) {
        String c10 = c(oVar.v(this.f39381d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // mt.h
    public h a(kt.p pVar) {
        if (this.f39381d == pVar) {
            return this;
        }
        return new o(pVar, this.f39382e);
    }

    @Override // mt.h
    public int d(kt.o oVar, Appendable appendable, kt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f39381d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // mt.h
    public h e(c cVar, kt.d dVar, int i10) {
        return new o(this.f39381d, this.f39382e, ((Integer) dVar.a(lt.a.f37644s, 0)).intValue(), ((Boolean) dVar.a(lt.a.f37634i, Boolean.TRUE)).booleanValue(), (Locale) dVar.a(lt.a.f37628c, Locale.getDefault()));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f39381d.equals(oVar.f39381d) && this.f39382e.equals(oVar.f39382e)) {
                return true;
            }
        }
        return false;
    }

    @Override // mt.h
    public void f(CharSequence charSequence, s sVar, kt.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f39383i;
        } else {
            intValue = ((Integer) dVar.a(lt.a.f37644s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f39381d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f39384o;
        } else {
            booleanValue = ((Boolean) dVar.a(lt.a.f37634i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f39385p;
        } else {
            locale = (Locale) dVar.a(lt.a.f37628c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f39382e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f39381d, obj);
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
                        tVar.I(this.f39381d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f39381d.name());
    }

    @Override // mt.h
    public boolean g() {
        return false;
    }

    @Override // mt.h
    public kt.p getElement() {
        return this.f39381d;
    }

    public int hashCode() {
        return (this.f39381d.hashCode() * 7) + (this.f39382e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f39381d.name());
        sb2.append(", resources=");
        sb2.append(this.f39382e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(kt.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f39381d = pVar;
        this.f39382e = map;
        this.f39383i = i10;
        this.f39384o = z10;
        this.f39385p = locale;
    }
}
