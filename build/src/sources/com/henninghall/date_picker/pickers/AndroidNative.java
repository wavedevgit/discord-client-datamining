package com.henninghall.date_picker.pickers;

import android.content.Context;
import android.graphics.Color;
import android.graphics.Paint;
import android.os.Build;
import android.os.Handler;
import android.util.AttributeSet;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import com.henninghall.date_picker.generated.b;
import com.henninghall.date_picker.o;
import com.henninghall.date_picker.pickers.a;
import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AndroidNative extends com.henninghall.date_picker.generated.b implements com.henninghall.date_picker.pickers.a {
    private final Handler A0;
    private boolean B0;

    /* renamed from: w0  reason: collision with root package name */
    private a.InterfaceC0192a f16699w0;

    /* renamed from: x0  reason: collision with root package name */
    private int f16700x0;

    /* renamed from: y0  reason: collision with root package name */
    private a.b f16701y0;

    /* renamed from: z0  reason: collision with root package name */
    private boolean f16702z0;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            AndroidNative.this.f16702z0 = false;
            AndroidNative.this.f16699w0.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ AndroidNative f16704d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ boolean f16705e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ boolean f16706i;

        b(AndroidNative androidNative, boolean z10, boolean z11) {
            this.f16704d = androidNative;
            this.f16705e = z10;
            this.f16706i = z11;
        }

        @Override // java.lang.Runnable
        public void run() {
            AndroidNative.this.p0(this.f16704d, this.f16705e);
            if (this.f16706i) {
                AndroidNative.this.s0();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements b.j {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ com.henninghall.date_picker.pickers.a f16708a;

        c(com.henninghall.date_picker.pickers.a aVar) {
            this.f16708a = aVar;
        }

        @Override // com.henninghall.date_picker.generated.b.j
        public void a(com.henninghall.date_picker.generated.b bVar, int i10, int i11) {
            if (AndroidNative.this.f16701y0 != null) {
                AndroidNative.this.f16701y0.a(this.f16708a, i10, i11);
            }
            if (AndroidNative.this.f16700x0 == 0) {
                AndroidNative.this.s0();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d implements b.i {
        d() {
        }

        @Override // com.henninghall.date_picker.generated.b.i
        public void a(com.henninghall.date_picker.generated.b bVar, int i10) {
            AndroidNative.this.r0(i10);
            AndroidNative.this.f16700x0 = i10;
            if (i10 != 0) {
                AndroidNative.this.B0 = true;
                AndroidNative.this.f16699w0.b();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class e implements Runnable {
        e() {
        }

        @Override // java.lang.Runnable
        public void run() {
            AndroidNative.this.B0 = false;
            AndroidNative.this.f16699w0.a();
            AndroidNative.this.f16699w0.b();
        }
    }

    public AndroidNative(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f16700x0 = 0;
        this.A0 = new Handler();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:17:0x0036, code lost:
        if (r7 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x0038, code lost:
        r1 = 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:19:0x0039, code lost:
        setValue((r6 + r1) % getMaxValue());
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x004a, code lost:
        if (r7 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0054, code lost:
        if (r7 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:30:0x005e, code lost:
        if (r7 == false) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0061, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void p0(com.henninghall.date_picker.generated.b r6, boolean r7) {
        /*
            r5 = this;
            java.lang.String r0 = "changeValueByOne"
            r1 = -1
            r2 = 1
            java.lang.Class r3 = r5.getClass()     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            java.lang.Class r3 = r3.getSuperclass()     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            java.lang.Class r4 = java.lang.Boolean.TYPE     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            java.lang.Class[] r4 = new java.lang.Class[]{r4}     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            java.lang.reflect.Method r3 = r3.getDeclaredMethod(r0, r4)     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            r3.setAccessible(r2)     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            java.lang.Boolean r4 = java.lang.Boolean.valueOf(r7)     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            java.lang.Object[] r4 = new java.lang.Object[]{r4}     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            r3.invoke(r6, r4)     // Catch: java.lang.Throwable -> L25 java.lang.reflect.InvocationTargetException -> L27 java.lang.IllegalAccessException -> L29 java.lang.IllegalArgumentException -> L2b java.lang.NoSuchMethodException -> L2d
            return
        L25:
            r6 = move-exception
            goto L62
        L27:
            r6 = move-exception
            goto L2f
        L29:
            r6 = move-exception
            goto L43
        L2b:
            r6 = move-exception
            goto L4d
        L2d:
            r6 = move-exception
            goto L57
        L2f:
            android.util.Log.w(r0, r6)     // Catch: java.lang.Throwable -> L25
            int r6 = r5.getValue()
            if (r7 == 0) goto L39
        L38:
            r1 = r2
        L39:
            int r6 = r6 + r1
            int r7 = r5.getMaxValue()
            int r6 = r6 % r7
            r5.setValue(r6)
            goto L61
        L43:
            android.util.Log.w(r0, r6)     // Catch: java.lang.Throwable -> L25
            int r6 = r5.getValue()
            if (r7 == 0) goto L39
            goto L38
        L4d:
            android.util.Log.w(r0, r6)     // Catch: java.lang.Throwable -> L25
            int r6 = r5.getValue()
            if (r7 == 0) goto L39
            goto L38
        L57:
            android.util.Log.w(r0, r6)     // Catch: java.lang.Throwable -> L25
            int r6 = r5.getValue()
            if (r7 == 0) goto L39
            goto L38
        L61:
            return
        L62:
            int r0 = r5.getValue()
            if (r7 == 0) goto L69
            r1 = r2
        L69:
            int r0 = r0 + r1
            int r7 = r5.getMaxValue()
            int r0 = r0 % r7
            r5.setValue(r0)
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: com.henninghall.date_picker.pickers.AndroidNative.p0(com.henninghall.date_picker.generated.b, boolean):void");
    }

    private void q0(boolean z10, int i10, boolean z11) {
        this.A0.postDelayed(new b(this, z10, z11), i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void r0(int i10) {
        if (this.f16700x0 != 0 && i10 == 0) {
            s0();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void s0() {
        this.A0.postDelayed(new e(), 500L);
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void a(int i10, boolean z10) {
        b(i10);
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void b(int i10) {
        boolean z10;
        boolean z11;
        int value = getValue();
        if (i10 != value) {
            int e10 = o.e(value, i10, getMaxValue(), getWrapSelectorWheel());
            int abs = Math.abs(e10);
            this.f16702z0 = true;
            this.f16699w0.b();
            this.A0.postDelayed(new a(), abs * 100);
            for (int i11 = 0; i11 < abs; i11++) {
                if (e10 > 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                int i12 = i11 * 100;
                if (i11 == abs - 1) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                q0(z10, i12, z11);
            }
        }
    }

    @Override // com.henninghall.date_picker.pickers.a
    public boolean c() {
        if (!this.B0 && !this.f16702z0) {
            return false;
        }
        return true;
    }

    @Override // com.henninghall.date_picker.pickers.a
    public View getView() {
        return this;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.henninghall.date_picker.generated.b, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.A0.removeCallbacksAndMessages(null);
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void setDividerColor(String str) {
        super.setDividerTint(Color.parseColor(str));
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void setOnValueChangeListenerInScrolling(a.b bVar) {
        this.f16701y0 = bVar;
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void setOnValueChangedListener(a.InterfaceC0192a interfaceC0192a) {
        this.f16699w0 = interfaceC0192a;
        super.setOnValueChangedListener(new c(this));
        super.setOnScrollListener(new d());
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void setTextAlign(Paint.Align align) {
    }

    @Override // com.henninghall.date_picker.pickers.a
    public void setTextColor(String str) {
        int parseColor = Color.parseColor(str);
        if (Build.VERSION.SDK_INT >= 29) {
            super.setTextColor(parseColor);
            return;
        }
        try {
            Field declaredField = getClass().getSuperclass().getDeclaredField("mSelectorWheelPaint");
            declaredField.setAccessible(true);
            ((Paint) declaredField.get(this)).setColor(parseColor);
        } catch (IllegalAccessException e10) {
            Log.w("setSelectedTextColor", e10);
        } catch (IllegalArgumentException e11) {
            Log.w("setSelectedTextColor", e11);
        } catch (NoSuchFieldException e12) {
            Log.w("setSelectedTextColor", e12);
        }
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            if (childAt instanceof EditText) {
                ((EditText) childAt).setTextColor(parseColor);
            }
        }
        invalidate();
    }
}
