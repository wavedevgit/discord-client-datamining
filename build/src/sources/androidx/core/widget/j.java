package androidx.core.widget;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.content.res.ColorStateList;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.icu.text.DecimalFormatSymbols;
import android.os.Build;
import android.text.Editable;
import android.text.PrecomputedText;
import android.text.TextDirectionHeuristic;
import android.text.TextDirectionHeuristics;
import android.text.TextPaint;
import android.text.method.PasswordTransformationMethod;
import android.util.TypedValue;
import android.view.ActionMode;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;
import androidx.core.text.PrecomputedTextCompat;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {
        static int a(TextView textView) {
            return textView.getBreakStrategy();
        }

        static int b(TextView textView) {
            return textView.getHyphenationFrequency();
        }

        static void c(TextView textView, int i10) {
            textView.setBreakStrategy(i10);
        }

        static void d(TextView textView, ColorStateList colorStateList) {
            textView.setCompoundDrawableTintList(colorStateList);
        }

        static void e(TextView textView, PorterDuff.Mode mode) {
            textView.setCompoundDrawableTintMode(mode);
        }

        static void f(TextView textView, int i10) {
            textView.setHyphenationFrequency(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b {
        static DecimalFormatSymbols a(Locale locale) {
            return DecimalFormatSymbols.getInstance(locale);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class c {
        static int a(TextView textView) {
            return textView.getAutoSizeMinTextSize();
        }

        static int b(TextView textView) {
            return textView.getAutoSizeStepGranularity();
        }

        static int c(TextView textView) {
            return textView.getAutoSizeTextType();
        }

        static void d(TextView textView, int i10, int i11, int i12, int i13) {
            textView.setAutoSizeTextTypeUniformWithConfiguration(i10, i11, i12, i13);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        static CharSequence a(PrecomputedText precomputedText) {
            return precomputedText;
        }

        static String[] b(DecimalFormatSymbols decimalFormatSymbols) {
            return decimalFormatSymbols.getDigitStrings();
        }

        static PrecomputedText.Params c(TextView textView) {
            return textView.getTextMetricsParams();
        }

        static void d(TextView textView, int i10) {
            textView.setFirstBaselineToTopHeight(i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {
        public static void a(TextView textView, int i10, float f10) {
            textView.setLineHeight(i10, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class f implements ActionMode.Callback {

        /* renamed from: a  reason: collision with root package name */
        private final ActionMode.Callback f3606a;

        /* renamed from: b  reason: collision with root package name */
        private final TextView f3607b;

        /* renamed from: c  reason: collision with root package name */
        private Class f3608c;

        /* renamed from: d  reason: collision with root package name */
        private Method f3609d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f3610e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f3611f = false;

        f(ActionMode.Callback callback, TextView textView) {
            this.f3606a = callback;
            this.f3607b = textView;
        }

        private Intent a() {
            return new Intent().setAction("android.intent.action.PROCESS_TEXT").setType("text/plain");
        }

        private Intent b(ResolveInfo resolveInfo, TextView textView) {
            Intent putExtra = a().putExtra("android.intent.extra.PROCESS_TEXT_READONLY", !e(textView));
            ActivityInfo activityInfo = resolveInfo.activityInfo;
            return putExtra.setClassName(activityInfo.packageName, activityInfo.name);
        }

        private List c(Context context, PackageManager packageManager) {
            ArrayList arrayList = new ArrayList();
            if (context instanceof Activity) {
                for (ResolveInfo resolveInfo : packageManager.queryIntentActivities(a(), 0)) {
                    if (f(resolveInfo, context)) {
                        arrayList.add(resolveInfo);
                    }
                }
            }
            return arrayList;
        }

        private boolean e(TextView textView) {
            if ((textView instanceof Editable) && textView.onCheckIsTextEditor() && textView.isEnabled()) {
                return true;
            }
            return false;
        }

        private boolean f(ResolveInfo resolveInfo, Context context) {
            if (context.getPackageName().equals(resolveInfo.activityInfo.packageName)) {
                return true;
            }
            ActivityInfo activityInfo = resolveInfo.activityInfo;
            if (!activityInfo.exported) {
                return false;
            }
            String str = activityInfo.permission;
            if (str == null || context.checkSelfPermission(str) == 0) {
                return true;
            }
            return false;
        }

        private void g(Menu menu) {
            Method declaredMethod;
            Context context = this.f3607b.getContext();
            PackageManager packageManager = context.getPackageManager();
            boolean z10 = this.f3611f;
            Class cls = Integer.TYPE;
            if (!z10) {
                this.f3611f = true;
                try {
                    Class<?> cls2 = Class.forName("com.android.internal.view.menu.MenuBuilder");
                    this.f3608c = cls2;
                    this.f3609d = cls2.getDeclaredMethod("removeItemAt", cls);
                    this.f3610e = true;
                } catch (ClassNotFoundException | NoSuchMethodException unused) {
                    this.f3608c = null;
                    this.f3609d = null;
                    this.f3610e = false;
                }
            }
            try {
                if (this.f3610e && this.f3608c.isInstance(menu)) {
                    declaredMethod = this.f3609d;
                } else {
                    declaredMethod = menu.getClass().getDeclaredMethod("removeItemAt", cls);
                }
                for (int size = menu.size() - 1; size >= 0; size--) {
                    MenuItem item = menu.getItem(size);
                    if (item.getIntent() != null && "android.intent.action.PROCESS_TEXT".equals(item.getIntent().getAction())) {
                        declaredMethod.invoke(menu, Integer.valueOf(size));
                    }
                }
                List c10 = c(context, packageManager);
                for (int i10 = 0; i10 < c10.size(); i10++) {
                    ResolveInfo resolveInfo = (ResolveInfo) c10.get(i10);
                    menu.add(0, 0, i10 + 100, resolveInfo.loadLabel(packageManager)).setIntent(b(resolveInfo, this.f3607b)).setShowAsAction(1);
                }
            } catch (IllegalAccessException | NoSuchMethodException | InvocationTargetException unused2) {
            }
        }

        ActionMode.Callback d() {
            return this.f3606a;
        }

        @Override // android.view.ActionMode.Callback
        public boolean onActionItemClicked(ActionMode actionMode, MenuItem menuItem) {
            return this.f3606a.onActionItemClicked(actionMode, menuItem);
        }

        @Override // android.view.ActionMode.Callback
        public boolean onCreateActionMode(ActionMode actionMode, Menu menu) {
            return this.f3606a.onCreateActionMode(actionMode, menu);
        }

        @Override // android.view.ActionMode.Callback
        public void onDestroyActionMode(ActionMode actionMode) {
            this.f3606a.onDestroyActionMode(actionMode);
        }

        @Override // android.view.ActionMode.Callback
        public boolean onPrepareActionMode(ActionMode actionMode, Menu menu) {
            g(menu);
            return this.f3606a.onPrepareActionMode(actionMode, menu);
        }
    }

    public static int a(TextView textView) {
        if (Build.VERSION.SDK_INT >= 27) {
            return c.a(textView);
        }
        if (textView instanceof androidx.core.widget.b) {
            return ((androidx.core.widget.b) textView).getAutoSizeMinTextSize();
        }
        return -1;
    }

    public static int b(TextView textView) {
        if (Build.VERSION.SDK_INT >= 27) {
            return c.b(textView);
        }
        if (textView instanceof androidx.core.widget.b) {
            return ((androidx.core.widget.b) textView).getAutoSizeStepGranularity();
        }
        return -1;
    }

    public static int c(TextView textView) {
        if (Build.VERSION.SDK_INT >= 27) {
            return c.c(textView);
        }
        if (textView instanceof androidx.core.widget.b) {
            return ((androidx.core.widget.b) textView).getAutoSizeTextType();
        }
        return 0;
    }

    public static Drawable[] d(TextView textView) {
        return textView.getCompoundDrawablesRelative();
    }

    public static int e(TextView textView) {
        return textView.getPaddingTop() - textView.getPaint().getFontMetricsInt().top;
    }

    public static int f(TextView textView) {
        return textView.getPaddingBottom() + textView.getPaint().getFontMetricsInt().bottom;
    }

    private static int g(TextDirectionHeuristic textDirectionHeuristic) {
        TextDirectionHeuristic textDirectionHeuristic2;
        TextDirectionHeuristic textDirectionHeuristic3 = TextDirectionHeuristics.FIRSTSTRONG_RTL;
        if (textDirectionHeuristic == textDirectionHeuristic3 || textDirectionHeuristic == (textDirectionHeuristic2 = TextDirectionHeuristics.FIRSTSTRONG_LTR)) {
            return 1;
        }
        if (textDirectionHeuristic == TextDirectionHeuristics.ANYRTL_LTR) {
            return 2;
        }
        if (textDirectionHeuristic == TextDirectionHeuristics.LTR) {
            return 3;
        }
        if (textDirectionHeuristic == TextDirectionHeuristics.RTL) {
            return 4;
        }
        if (textDirectionHeuristic == TextDirectionHeuristics.LOCALE) {
            return 5;
        }
        if (textDirectionHeuristic == textDirectionHeuristic2) {
            return 6;
        }
        if (textDirectionHeuristic != textDirectionHeuristic3) {
            return 1;
        }
        return 7;
    }

    private static TextDirectionHeuristic h(TextView textView) {
        if (textView.getTransformationMethod() instanceof PasswordTransformationMethod) {
            return TextDirectionHeuristics.LTR;
        }
        boolean z10 = true;
        if (Build.VERSION.SDK_INT >= 28 && (textView.getInputType() & 15) == 3) {
            byte directionality = Character.getDirectionality(d.b(b.a(textView.getTextLocale()))[0].codePointAt(0));
            if (directionality != 1 && directionality != 2) {
                return TextDirectionHeuristics.LTR;
            }
            return TextDirectionHeuristics.RTL;
        }
        if (textView.getLayoutDirection() != 1) {
            z10 = false;
        }
        switch (textView.getTextDirection()) {
            case 2:
                return TextDirectionHeuristics.ANYRTL_LTR;
            case 3:
                return TextDirectionHeuristics.LTR;
            case 4:
                return TextDirectionHeuristics.RTL;
            case 5:
                return TextDirectionHeuristics.LOCALE;
            case 6:
                return TextDirectionHeuristics.FIRSTSTRONG_LTR;
            case 7:
                return TextDirectionHeuristics.FIRSTSTRONG_RTL;
            default:
                if (z10) {
                    return TextDirectionHeuristics.FIRSTSTRONG_RTL;
                }
                return TextDirectionHeuristics.FIRSTSTRONG_LTR;
        }
    }

    public static PrecomputedTextCompat.Params i(TextView textView) {
        if (Build.VERSION.SDK_INT >= 28) {
            return new PrecomputedTextCompat.Params(d.c(textView));
        }
        PrecomputedTextCompat.Params.a aVar = new PrecomputedTextCompat.Params.a(new TextPaint(textView.getPaint()));
        aVar.b(a.a(textView));
        aVar.c(a.b(textView));
        aVar.d(h(textView));
        return aVar.a();
    }

    public static void j(TextView textView, int i10, int i11, int i12, int i13) {
        if (Build.VERSION.SDK_INT >= 27) {
            c.d(textView, i10, i11, i12, i13);
        } else if (textView instanceof androidx.core.widget.b) {
            ((androidx.core.widget.b) textView).setAutoSizeTextTypeUniformWithConfiguration(i10, i11, i12, i13);
        }
    }

    public static void k(TextView textView, ColorStateList colorStateList) {
        b2.e.g(textView);
        a.d(textView, colorStateList);
    }

    public static void l(TextView textView, PorterDuff.Mode mode) {
        b2.e.g(textView);
        a.e(textView, mode);
    }

    public static void m(TextView textView, Drawable drawable, Drawable drawable2, Drawable drawable3, Drawable drawable4) {
        textView.setCompoundDrawablesRelative(drawable, drawable2, drawable3, drawable4);
    }

    public static void n(TextView textView, int i10) {
        int i11;
        b2.e.d(i10);
        if (Build.VERSION.SDK_INT >= 28) {
            d.d(textView, i10);
            return;
        }
        Paint.FontMetricsInt fontMetricsInt = textView.getPaint().getFontMetricsInt();
        if (textView.getIncludeFontPadding()) {
            i11 = fontMetricsInt.top;
        } else {
            i11 = fontMetricsInt.ascent;
        }
        if (i10 > Math.abs(i11)) {
            textView.setPadding(textView.getPaddingLeft(), i10 + i11, textView.getPaddingRight(), textView.getPaddingBottom());
        }
    }

    public static void o(TextView textView, int i10) {
        int i11;
        b2.e.d(i10);
        Paint.FontMetricsInt fontMetricsInt = textView.getPaint().getFontMetricsInt();
        if (textView.getIncludeFontPadding()) {
            i11 = fontMetricsInt.bottom;
        } else {
            i11 = fontMetricsInt.descent;
        }
        if (i10 > Math.abs(i11)) {
            textView.setPadding(textView.getPaddingLeft(), textView.getPaddingTop(), textView.getPaddingRight(), i10 - i11);
        }
    }

    public static void p(TextView textView, int i10) {
        b2.e.d(i10);
        int fontMetricsInt = textView.getPaint().getFontMetricsInt(null);
        if (i10 != fontMetricsInt) {
            textView.setLineSpacing(i10 - fontMetricsInt, 1.0f);
        }
    }

    public static void q(TextView textView, int i10, float f10) {
        if (Build.VERSION.SDK_INT >= 34) {
            e.a(textView, i10, f10);
        } else {
            p(textView, Math.round(TypedValue.applyDimension(i10, f10, textView.getResources().getDisplayMetrics())));
        }
    }

    public static void r(TextView textView, PrecomputedTextCompat precomputedTextCompat) {
        if (Build.VERSION.SDK_INT >= 29) {
            textView.setText(d.a(precomputedTextCompat.b()));
        } else if (i(textView).a(precomputedTextCompat.a())) {
            textView.setText(precomputedTextCompat);
        } else {
            throw new IllegalArgumentException("Given text can not be applied to TextView.");
        }
    }

    public static void s(TextView textView, int i10) {
        textView.setTextAppearance(i10);
    }

    public static void t(TextView textView, PrecomputedTextCompat.Params params) {
        textView.setTextDirection(g(params.d()));
        textView.getPaint().set(params.e());
        a.c(textView, params.b());
        a.f(textView, params.c());
    }

    public static ActionMode.Callback u(ActionMode.Callback callback) {
        if ((callback instanceof f) && Build.VERSION.SDK_INT >= 26) {
            return ((f) callback).d();
        }
        return callback;
    }

    public static ActionMode.Callback v(TextView textView, ActionMode.Callback callback) {
        int i10 = Build.VERSION.SDK_INT;
        if (i10 >= 26 && i10 <= 27 && !(callback instanceof f) && callback != null) {
            return new f(callback, textView);
        }
        return callback;
    }
}
