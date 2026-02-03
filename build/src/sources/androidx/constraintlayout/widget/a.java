package androidx.constraintlayout.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.util.Log;
import android.util.TypedValue;
import android.util.Xml;
import android.view.View;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import org.xmlpull.v1.XmlPullParser;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a {

    /* renamed from: a  reason: collision with root package name */
    private boolean f2606a;

    /* renamed from: b  reason: collision with root package name */
    String f2607b;

    /* renamed from: c  reason: collision with root package name */
    private EnumC0030a f2608c;

    /* renamed from: d  reason: collision with root package name */
    private int f2609d;

    /* renamed from: e  reason: collision with root package name */
    private float f2610e;

    /* renamed from: f  reason: collision with root package name */
    private String f2611f;

    /* renamed from: g  reason: collision with root package name */
    boolean f2612g;

    /* renamed from: h  reason: collision with root package name */
    private int f2613h;

    /* renamed from: androidx.constraintlayout.widget.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum EnumC0030a {
        INT_TYPE,
        FLOAT_TYPE,
        COLOR_TYPE,
        COLOR_DRAWABLE_TYPE,
        STRING_TYPE,
        BOOLEAN_TYPE,
        DIMENSION_TYPE,
        REFERENCE_TYPE
    }

    public a(String str, EnumC0030a enumC0030a, Object obj, boolean z10) {
        this.f2607b = str;
        this.f2608c = enumC0030a;
        this.f2606a = z10;
        d(obj);
    }

    public static HashMap a(HashMap hashMap, View view) {
        HashMap hashMap2 = new HashMap();
        Class<?> cls = view.getClass();
        for (String str : hashMap.keySet()) {
            a aVar = (a) hashMap.get(str);
            try {
                if (str.equals("BackgroundColor")) {
                    hashMap2.put(str, new a(aVar, Integer.valueOf(((ColorDrawable) view.getBackground()).getColor())));
                } else {
                    hashMap2.put(str, new a(aVar, cls.getMethod("getMap" + str, null).invoke(view, null)));
                }
            } catch (IllegalAccessException e10) {
                Log.e("TransitionLayout", " Custom Attribute \"" + str + "\" not found on " + cls.getName(), e10);
            } catch (NoSuchMethodException e11) {
                Log.e("TransitionLayout", cls.getName() + " must have a method " + str, e11);
            } catch (InvocationTargetException e12) {
                Log.e("TransitionLayout", " Custom Attribute \"" + str + "\" not found on " + cls.getName(), e12);
            }
        }
        return hashMap2;
    }

    public static void b(Context context, XmlPullParser xmlPullParser, HashMap hashMap) {
        EnumC0030a enumC0030a;
        Object valueOf;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(Xml.asAttributeSet(xmlPullParser), d.f2791t4);
        int indexCount = obtainStyledAttributes.getIndexCount();
        String str = null;
        Object obj = null;
        EnumC0030a enumC0030a2 = null;
        boolean z10 = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = obtainStyledAttributes.getIndex(i10);
            if (index == d.f2799u4) {
                str = obtainStyledAttributes.getString(index);
                if (str != null && str.length() > 0) {
                    str = Character.toUpperCase(str.charAt(0)) + str.substring(1);
                }
            } else if (index == d.E4) {
                str = obtainStyledAttributes.getString(index);
                z10 = true;
            } else if (index == d.f2807v4) {
                obj = Boolean.valueOf(obtainStyledAttributes.getBoolean(index, false));
                enumC0030a2 = EnumC0030a.BOOLEAN_TYPE;
            } else {
                if (index == d.f2823x4) {
                    enumC0030a = EnumC0030a.COLOR_TYPE;
                    valueOf = Integer.valueOf(obtainStyledAttributes.getColor(index, 0));
                } else if (index == d.f2815w4) {
                    enumC0030a = EnumC0030a.COLOR_DRAWABLE_TYPE;
                    valueOf = Integer.valueOf(obtainStyledAttributes.getColor(index, 0));
                } else if (index == d.B4) {
                    enumC0030a = EnumC0030a.DIMENSION_TYPE;
                    valueOf = Float.valueOf(TypedValue.applyDimension(1, obtainStyledAttributes.getDimension(index, 0.0f), context.getResources().getDisplayMetrics()));
                } else if (index == d.f2831y4) {
                    enumC0030a = EnumC0030a.DIMENSION_TYPE;
                    valueOf = Float.valueOf(obtainStyledAttributes.getDimension(index, 0.0f));
                } else if (index == d.f2839z4) {
                    enumC0030a = EnumC0030a.FLOAT_TYPE;
                    valueOf = Float.valueOf(obtainStyledAttributes.getFloat(index, Float.NaN));
                } else if (index == d.A4) {
                    enumC0030a = EnumC0030a.INT_TYPE;
                    valueOf = Integer.valueOf(obtainStyledAttributes.getInteger(index, -1));
                } else if (index == d.D4) {
                    enumC0030a = EnumC0030a.STRING_TYPE;
                    valueOf = obtainStyledAttributes.getString(index);
                } else if (index == d.C4) {
                    enumC0030a = EnumC0030a.REFERENCE_TYPE;
                    int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                    if (resourceId == -1) {
                        resourceId = obtainStyledAttributes.getInt(index, -1);
                    }
                    valueOf = Integer.valueOf(resourceId);
                }
                Object obj2 = valueOf;
                enumC0030a2 = enumC0030a;
                obj = obj2;
            }
        }
        if (str != null && obj != null) {
            hashMap.put(str, new a(str, enumC0030a2, obj, z10));
        }
        obtainStyledAttributes.recycle();
    }

    public static void c(View view, HashMap hashMap) {
        String str;
        Class<?> cls = view.getClass();
        for (String str2 : hashMap.keySet()) {
            a aVar = (a) hashMap.get(str2);
            if (!aVar.f2606a) {
                str = "set" + str2;
            } else {
                str = str2;
            }
            try {
                int ordinal = aVar.f2608c.ordinal();
                Class cls2 = Float.TYPE;
                Class cls3 = Integer.TYPE;
                switch (ordinal) {
                    case 0:
                        cls.getMethod(str, cls3).invoke(view, Integer.valueOf(aVar.f2609d));
                        continue;
                    case 1:
                        cls.getMethod(str, cls2).invoke(view, Float.valueOf(aVar.f2610e));
                        continue;
                    case 2:
                        cls.getMethod(str, cls3).invoke(view, Integer.valueOf(aVar.f2613h));
                        continue;
                    case 3:
                        Method method = cls.getMethod(str, Drawable.class);
                        ColorDrawable colorDrawable = new ColorDrawable();
                        colorDrawable.setColor(aVar.f2613h);
                        method.invoke(view, colorDrawable);
                        continue;
                    case 4:
                        cls.getMethod(str, CharSequence.class).invoke(view, aVar.f2611f);
                        continue;
                    case 5:
                        cls.getMethod(str, Boolean.TYPE).invoke(view, Boolean.valueOf(aVar.f2612g));
                        continue;
                    case 6:
                        cls.getMethod(str, cls2).invoke(view, Float.valueOf(aVar.f2610e));
                        continue;
                    case 7:
                        cls.getMethod(str, cls3).invoke(view, Integer.valueOf(aVar.f2609d));
                        continue;
                }
            } catch (IllegalAccessException e10) {
                Log.e("TransitionLayout", " Custom Attribute \"" + str2 + "\" not found on " + cls.getName(), e10);
            } catch (NoSuchMethodException e11) {
                Log.e("TransitionLayout", cls.getName() + " must have a method " + str, e11);
            } catch (InvocationTargetException e12) {
                Log.e("TransitionLayout", " Custom Attribute \"" + str2 + "\" not found on " + cls.getName(), e12);
            }
        }
    }

    public void d(Object obj) {
        switch (this.f2608c.ordinal()) {
            case 0:
            case 7:
                this.f2609d = ((Integer) obj).intValue();
                return;
            case 1:
                this.f2610e = ((Float) obj).floatValue();
                return;
            case 2:
            case 3:
                this.f2613h = ((Integer) obj).intValue();
                return;
            case 4:
                this.f2611f = (String) obj;
                return;
            case 5:
                this.f2612g = ((Boolean) obj).booleanValue();
                return;
            case 6:
                this.f2610e = ((Float) obj).floatValue();
                return;
            default:
                return;
        }
    }

    public a(a aVar, Object obj) {
        this.f2606a = false;
        this.f2607b = aVar.f2607b;
        this.f2608c = aVar.f2608c;
        d(obj);
    }
}
