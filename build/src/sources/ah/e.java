package ah;

import android.graphics.Matrix;
import android.util.Property;
import android.widget.ImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends Property {

    /* renamed from: a  reason: collision with root package name */
    private final Matrix f632a;

    public e() {
        super(Matrix.class, "imageMatrixProperty");
        this.f632a = new Matrix();
    }

    @Override // android.util.Property
    /* renamed from: a */
    public Matrix get(ImageView imageView) {
        this.f632a.set(imageView.getImageMatrix());
        return this.f632a;
    }

    @Override // android.util.Property
    /* renamed from: b */
    public void set(ImageView imageView, Matrix matrix) {
        imageView.setImageMatrix(matrix);
    }
}
