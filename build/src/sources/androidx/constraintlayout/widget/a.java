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
    private boolean f3047a;

    /* renamed from: b  reason: collision with root package name */
    String f3048b;

    /* renamed from: c  reason: collision with root package name */
    private EnumC0029a f3049c;

    /* renamed from: d  reason: collision with root package name */
    private int f3050d;

    /* renamed from: e  reason: collision with root package name */
    private float f3051e;

    /* renamed from: f  reason: collision with root package name */
    private String f3052f;

    /* renamed from: g  reason: collision with root package name */
    boolean f3053g;

    /* renamed from: h  reason: collision with root package name */
    private int f3054h;

    /* renamed from: androidx.constraintlayout.widget.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum EnumC0029a {
        INT_TYPE,
        FLOAT_TYPE,
        COLOR_TYPE,
        COLOR_DRAWABLE_TYPE,
        STRING_TYPE,
        BOOLEAN_TYPE,
        DIMENSION_TYPE,
        REFERENCE_TYPE
    }

    public a(String str, EnumC0029a enumC0029a, Object obj, boolean z10) {
        this.f3048b = str;
        this.f3049c = enumC0029a;
        this.f3047a = z10;
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
        EnumC0029a enumC0029a;
        Object valueOf;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(Xml.asAttributeSet(xmlPullParser), d.f3232t4);
        int indexCount = obtainStyledAttributes.getIndexCount();
        String str = null;
        Object obj = null;
        EnumC0029a enumC0029a2 = null;
        boolean z10 = false;
        for (int i10 = 0; i10 < indexCount; i10++) {
            int index = obtainStyledAttributes.getIndex(i10);
            if (index == d.f3240u4) {
                str = obtainStyledAttributes.getString(index);
                if (str != null && str.length() > 0) {
                    str = Character.toUpperCase(str.charAt(0)) + str.substring(1);
                }
            } else if (index == d.E4) {
                str = obtainStyledAttributes.getString(index);
                z10 = true;
            } else if (index == d.f3248v4) {
                obj = Boolean.valueOf(obtainStyledAttributes.getBoolean(index, false));
                enumC0029a2 = EnumC0029a.BOOLEAN_TYPE;
            } else {
                if (index == d.f3264x4) {
                    enumC0029a = EnumC0029a.COLOR_TYPE;
                    valueOf = Integer.valueOf(obtainStyledAttributes.getColor(index, 0));
                } else if (index == d.f3256w4) {
                    enumC0029a = EnumC0029a.COLOR_DRAWABLE_TYPE;
                    valueOf = Integer.valueOf(obtainStyledAttributes.getColor(index, 0));
                } else if (index == d.B4) {
                    enumC0029a = EnumC0029a.DIMENSION_TYPE;
                    valueOf = Float.valueOf(TypedValue.applyDimension(1, obtainStyledAttributes.getDimension(index, 0.0f), context.getResources().getDisplayMetrics()));
                } else if (index == d.f3272y4) {
                    enumC0029a = EnumC0029a.DIMENSION_TYPE;
                    valueOf = Float.valueOf(obtainStyledAttributes.getDimension(index, 0.0f));
                } else if (index == d.f3280z4) {
                    enumC0029a = EnumC0029a.FLOAT_TYPE;
                    valueOf = Float.valueOf(obtainStyledAttributes.getFloat(index, Float.NaN));
                } else if (index == d.A4) {
                    enumC0029a = EnumC0029a.INT_TYPE;
                    valueOf = Integer.valueOf(obtainStyledAttributes.getInteger(index, -1));
                } else if (index == d.D4) {
                    enumC0029a = EnumC0029a.STRING_TYPE;
                    valueOf = obtainStyledAttributes.getString(index);
                } else if (index == d.C4) {
                    enumC0029a = EnumC0029a.REFERENCE_TYPE;
                    int resourceId = obtainStyledAttributes.getResourceId(index, -1);
                    if (resourceId == -1) {
                        resourceId = obtainStyledAttributes.getInt(index, -1);
                    }
                    valueOf = Integer.valueOf(resourceId);
                }
                Object obj2 = valueOf;
                enumC0029a2 = enumC0029a;
                obj = obj2;
            }
        }
        if (str != null && obj != null) {
            hashMap.put(str, new a(str, enumC0029a2, obj, z10));
        }
        obtainStyledAttributes.recycle();
    }

    public static void c(View view, HashMap hashMap) {
        String str;
        Class<?> cls = view.getClass();
        for (String str2 : hashMap.keySet()) {
            a aVar = (a) hashMap.get(str2);
            if (!aVar.f3047a) {
                str = "set" + str2;
            } else {
                str = str2;
            }
            try {
                int ordinal = aVar.f3049c.ordinal();
                Class cls2 = Float.TYPE;
                Class cls3 = Integer.TYPE;
                switch (ordinal) {
                    case 0:
                        cls.getMethod(str, cls3).invoke(view, Integer.valueOf(aVar.f3050d));
                        continue;
                    case 1:
                        cls.getMethod(str, cls2).invoke(view, Float.valueOf(aVar.f3051e));
                        continue;
                    case 2:
                        cls.getMethod(str, cls3).invoke(view, Integer.valueOf(aVar.f3054h));
                        continue;
                    case 3:
                        Method method = cls.getMethod(str, Drawable.class);
                        ColorDrawable colorDrawable = new ColorDrawable();
                        colorDrawable.setColor(aVar.f3054h);
                        method.invoke(view, colorDrawable);
                        continue;
                    case 4:
                        cls.getMethod(str, CharSequence.class).invoke(view, aVar.f3052f);
                        continue;
                    case 5:
                        cls.getMethod(str, Boolean.TYPE).invoke(view, Boolean.valueOf(aVar.f3053g));
                        continue;
                    case 6:
                        cls.getMethod(str, cls2).invoke(view, Float.valueOf(aVar.f3051e));
                        continue;
                    case 7:
                        cls.getMethod(str, cls3).invoke(view, Integer.valueOf(aVar.f3050d));
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
        switch (this.f3049c.ordinal()) {
            case 0:
            case 7:
                this.f3050d = ((Integer) obj).intValue();
                return;
            case 1:
                this.f3051e = ((Float) obj).floatValue();
                return;
            case 2:
            case 3:
                this.f3054h = ((Integer) obj).intValue();
                return;
            case 4:
                this.f3052f = (String) obj;
                return;
            case 5:
                this.f3053g = ((Boolean) obj).booleanValue();
                return;
            case 6:
                this.f3051e = ((Float) obj).floatValue();
                return;
            default:
                return;
        }
    }

    public a(a aVar, Object obj) {
        this.f3047a = false;
        this.f3048b = aVar.f3048b;
        this.f3049c = aVar.f3049c;
        d(obj);
    }
}
