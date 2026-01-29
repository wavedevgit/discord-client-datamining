package d3;

import android.text.InputFilter;
import android.text.method.PasswordTransformationMethod;
import android.text.method.TransformationMethod;
import android.util.SparseArray;
import android.widget.TextView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final b f21656a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a extends b {

        /* renamed from: a  reason: collision with root package name */
        private final TextView f21657a;

        /* renamed from: b  reason: collision with root package name */
        private final d f21658b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f21659c = true;

        a(TextView textView) {
            this.f21657a = textView;
            this.f21658b = new d(textView);
        }

        private InputFilter[] f(InputFilter[] inputFilterArr) {
            int length = inputFilterArr.length;
            for (InputFilter inputFilter : inputFilterArr) {
                if (inputFilter == this.f21658b) {
                    return inputFilterArr;
                }
            }
            InputFilter[] inputFilterArr2 = new InputFilter[inputFilterArr.length + 1];
            System.arraycopy(inputFilterArr, 0, inputFilterArr2, 0, length);
            inputFilterArr2[length] = this.f21658b;
            return inputFilterArr2;
        }

        private SparseArray g(InputFilter[] inputFilterArr) {
            SparseArray sparseArray = new SparseArray(1);
            for (int i10 = 0; i10 < inputFilterArr.length; i10++) {
                InputFilter inputFilter = inputFilterArr[i10];
                if (inputFilter instanceof d) {
                    sparseArray.put(i10, inputFilter);
                }
            }
            return sparseArray;
        }

        private InputFilter[] h(InputFilter[] inputFilterArr) {
            SparseArray g10 = g(inputFilterArr);
            if (g10.size() == 0) {
                return inputFilterArr;
            }
            int length = inputFilterArr.length;
            InputFilter[] inputFilterArr2 = new InputFilter[inputFilterArr.length - g10.size()];
            int i10 = 0;
            for (int i11 = 0; i11 < length; i11++) {
                if (g10.indexOfKey(i11) < 0) {
                    inputFilterArr2[i10] = inputFilterArr[i11];
                    i10++;
                }
            }
            return inputFilterArr2;
        }

        private TransformationMethod j(TransformationMethod transformationMethod) {
            if (transformationMethod instanceof h) {
                return ((h) transformationMethod).a();
            }
            return transformationMethod;
        }

        private void k() {
            this.f21657a.setFilters(a(this.f21657a.getFilters()));
        }

        private TransformationMethod m(TransformationMethod transformationMethod) {
            if (transformationMethod instanceof h) {
                return transformationMethod;
            }
            if (transformationMethod instanceof PasswordTransformationMethod) {
                return transformationMethod;
            }
            return new h(transformationMethod);
        }

        @Override // d3.f.b
        InputFilter[] a(InputFilter[] inputFilterArr) {
            if (!this.f21659c) {
                return h(inputFilterArr);
            }
            return f(inputFilterArr);
        }

        @Override // d3.f.b
        public boolean b() {
            return this.f21659c;
        }

        @Override // d3.f.b
        void c(boolean z10) {
            if (z10) {
                l();
            }
        }

        @Override // d3.f.b
        void d(boolean z10) {
            this.f21659c = z10;
            l();
            k();
        }

        @Override // d3.f.b
        TransformationMethod e(TransformationMethod transformationMethod) {
            if (this.f21659c) {
                return m(transformationMethod);
            }
            return j(transformationMethod);
        }

        void i(boolean z10) {
            this.f21659c = z10;
        }

        void l() {
            this.f21657a.setTransformationMethod(e(this.f21657a.getTransformationMethod()));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b {
        b() {
        }

        abstract InputFilter[] a(InputFilter[] inputFilterArr);

        public abstract boolean b();

        abstract void c(boolean z10);

        abstract void d(boolean z10);

        abstract TransformationMethod e(TransformationMethod transformationMethod);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class c extends b {

        /* renamed from: a  reason: collision with root package name */
        private final a f21660a;

        c(TextView textView) {
            this.f21660a = new a(textView);
        }

        private boolean f() {
            return !androidx.emoji2.text.e.i();
        }

        @Override // d3.f.b
        InputFilter[] a(InputFilter[] inputFilterArr) {
            if (f()) {
                return inputFilterArr;
            }
            return this.f21660a.a(inputFilterArr);
        }

        @Override // d3.f.b
        public boolean b() {
            return this.f21660a.b();
        }

        @Override // d3.f.b
        void c(boolean z10) {
            if (f()) {
                return;
            }
            this.f21660a.c(z10);
        }

        @Override // d3.f.b
        void d(boolean z10) {
            if (f()) {
                this.f21660a.i(z10);
            } else {
                this.f21660a.d(z10);
            }
        }

        @Override // d3.f.b
        TransformationMethod e(TransformationMethod transformationMethod) {
            if (f()) {
                return transformationMethod;
            }
            return this.f21660a.e(transformationMethod);
        }
    }

    public f(TextView textView, boolean z10) {
        b2.e.h(textView, "textView cannot be null");
        if (!z10) {
            this.f21656a = new c(textView);
        } else {
            this.f21656a = new a(textView);
        }
    }

    public InputFilter[] a(InputFilter[] inputFilterArr) {
        return this.f21656a.a(inputFilterArr);
    }

    public boolean b() {
        return this.f21656a.b();
    }

    public void c(boolean z10) {
        this.f21656a.c(z10);
    }

    public void d(boolean z10) {
        this.f21656a.d(z10);
    }

    public TransformationMethod e(TransformationMethod transformationMethod) {
        return this.f21656a.e(transformationMethod);
    }
}
