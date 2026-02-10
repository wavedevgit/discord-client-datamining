package ch;

import android.graphics.Matrix;
import android.util.Property;
import android.widget.ImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends Property {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f7602a;

    public e() {
        super(Matrix.class, "imageMatrixProperty");
        this.f7602a = new Matrix();
    }

    @Override // android.util.Property
    /* renamed from: a */
    public Matrix get(ImageView imageView) {
        this.f7602a.set(imageView.getImageMatrix());
        return this.f7602a;
    }

    @Override // android.util.Property
    /* renamed from: b */
    public void set(ImageView imageView, Matrix matrix) {
        imageView.setImageMatrix(matrix);
    }
}
